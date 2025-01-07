# `googleDiscoveryEngineTargetSite` Submodule <a name="`googleDiscoveryEngineTargetSite` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineTargetSite <a name="GoogleDiscoveryEngineTargetSite" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site google_discovery_engine_target_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSite(Construct Scope, string Id, GoogleDiscoveryEngineTargetSiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig">GoogleDiscoveryEngineTargetSiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig">GoogleDiscoveryEngineTargetSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineTargetSiteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetExactMatch"></a>

```csharp
private void ResetExactMatch()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineTargetSite.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineTargetSite.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineTargetSite.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineTargetSite.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineTargetSite to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineTargetSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineTargetSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList">GoogleDiscoveryEngineTargetSiteFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.generatedUriPattern">GeneratedUriPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.indexingStatus">IndexingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.rootDomainUri">RootDomainUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.siteVerificationInfo">SiteVerificationInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList">GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.targetSiteId">TargetSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference">GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreIdInput">DataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatchInput">ExactMatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPatternInput">ProvidedUriPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreId">DataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatch">ExactMatch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.failureReason"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteFailureReasonList FailureReason { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList">GoogleDiscoveryEngineTargetSiteFailureReasonList</a>

---

##### `GeneratedUriPattern`<sup>Required</sup> <a name="GeneratedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.generatedUriPattern"></a>

```csharp
public string GeneratedUriPattern { get; }
```

- *Type:* string

---

##### `IndexingStatus`<sup>Required</sup> <a name="IndexingStatus" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.indexingStatus"></a>

```csharp
public string IndexingStatus { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RootDomainUri`<sup>Required</sup> <a name="RootDomainUri" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.rootDomainUri"></a>

```csharp
public string RootDomainUri { get; }
```

- *Type:* string

---

##### `SiteVerificationInfo`<sup>Required</sup> <a name="SiteVerificationInfo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.siteVerificationInfo"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList SiteVerificationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList">GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList</a>

---

##### `TargetSiteId`<sup>Required</sup> <a name="TargetSiteId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.targetSiteId"></a>

```csharp
public string TargetSiteId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference">GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataStoreIdInput`<sup>Optional</sup> <a name="DataStoreIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreIdInput"></a>

```csharp
public string DataStoreIdInput { get; }
```

- *Type:* string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatchInput"></a>

```csharp
public object ExactMatchInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProvidedUriPatternInput`<sup>Optional</sup> <a name="ProvidedUriPatternInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPatternInput"></a>

```csharp
public string ProvidedUriPatternInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.dataStoreId"></a>

```csharp
public string DataStoreId { get; }
```

- *Type:* string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.exactMatch"></a>

```csharp
public object ExactMatch { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.providedUriPattern"></a>

```csharp
public string ProvidedUriPattern { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSite.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineTargetSiteConfig <a name="GoogleDiscoveryEngineTargetSiteConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataStoreId,
    string Location,
    string ProvidedUriPattern,
    object ExactMatch = null,
    string Id = null,
    string Project = null,
    GoogleDiscoveryEngineTargetSiteTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dataStoreId">DataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>string</code> | The user provided URI pattern from which the 'generated_uri_pattern' is generated. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.exactMatch">ExactMatch</a></code> | <code>object</code> | If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#id GoogleDiscoveryEngineTargetSite#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#project GoogleDiscoveryEngineTargetSite#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.type">Type</a></code> | <code>string</code> | The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.dataStoreId"></a>

```csharp
public string DataStoreId { get; set; }
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#data_store_id GoogleDiscoveryEngineTargetSite#data_store_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#location GoogleDiscoveryEngineTargetSite#location}

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.providedUriPattern"></a>

```csharp
public string ProvidedUriPattern { get; set; }
```

- *Type:* string

The user provided URI pattern from which the 'generated_uri_pattern' is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#provided_uri_pattern GoogleDiscoveryEngineTargetSite#provided_uri_pattern}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.exactMatch"></a>

```csharp
public object ExactMatch { get; set; }
```

- *Type:* object

If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern.

If set to true, an uri_pattern
is generated to try to be an exact match of the provided_uri_pattern or
just the specific page if the provided_uri_pattern is a specific one.
provided_uri_pattern is always normalized to generate the URI pattern to
be used by the search engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#exact_match GoogleDiscoveryEngineTargetSite#exact_match}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#id GoogleDiscoveryEngineTargetSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#project GoogleDiscoveryEngineTargetSite#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts">GoogleDiscoveryEngineTargetSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#timeouts GoogleDiscoveryEngineTargetSite#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#type GoogleDiscoveryEngineTargetSite#type}

---

### GoogleDiscoveryEngineTargetSiteFailureReason <a name="GoogleDiscoveryEngineTargetSiteFailureReason" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteFailureReason {

};
```


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure {

};
```


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfo <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfo" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteSiteVerificationInfo {

};
```


### GoogleDiscoveryEngineTargetSiteTimeouts <a name="GoogleDiscoveryEngineTargetSiteTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#create GoogleDiscoveryEngineTargetSite#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#delete GoogleDiscoveryEngineTargetSite#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#create GoogleDiscoveryEngineTargetSite#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_discovery_engine_target_site#delete GoogleDiscoveryEngineTargetSite#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineTargetSiteFailureReasonList <a name="GoogleDiscoveryEngineTargetSiteFailureReasonList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteFailureReasonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get"></a>

```csharp
private GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference <a name="GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure">QuotaFailure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason">GoogleDiscoveryEngineTargetSiteFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QuotaFailure`<sup>Required</sup> <a name="QuotaFailure" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList QuotaFailure { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteFailureReason InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReason">GoogleDiscoveryEngineTargetSiteFailureReason</a>

---


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get"></a>

```csharp
private GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference <a name="GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota">TotalRequiredQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalRequiredQuota`<sup>Required</sup> <a name="TotalRequiredQuota" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota"></a>

```csharp
public double TotalRequiredQuota { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure">GoogleDiscoveryEngineTargetSiteFailureReasonQuotaFailure</a>

---


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get"></a>

```csharp
private GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference <a name="GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState">SiteVerificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime">VerifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo">GoogleDiscoveryEngineTargetSiteSiteVerificationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SiteVerificationState`<sup>Required</sup> <a name="SiteVerificationState" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState"></a>

```csharp
public string SiteVerificationState { get; }
```

- *Type:* string

---

##### `VerifyTime`<sup>Required</sup> <a name="VerifyTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime"></a>

```csharp
public string VerifyTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineTargetSiteSiteVerificationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteSiteVerificationInfo">GoogleDiscoveryEngineTargetSiteSiteVerificationInfo</a>

---


### GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference <a name="GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineTargetSite.GoogleDiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



