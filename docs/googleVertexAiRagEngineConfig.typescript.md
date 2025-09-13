# `googleVertexAiRagEngineConfig` Submodule <a name="`googleVertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagEngineConfig <a name="GoogleVertexAiRagEngineConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

new googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig(scope: Construct, id: string, config: GoogleVertexAiRagEngineConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig">GoogleVertexAiRagEngineConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig">GoogleVertexAiRagEngineConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig">putRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRagManagedDbConfig` <a name="putRagManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```typescript
public putRagManagedDbConfig(value: GoogleVertexAiRagEngineConfigRagManagedDbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiRagEngineConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiRagEngineConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference">GoogleVertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfigInput">ragManagedDbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```typescript
public readonly ragManagedDbConfig: GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiRagEngineConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference">GoogleVertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ragManagedDbConfigInput`<sup>Optional</sup> <a name="ragManagedDbConfigInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```typescript
public readonly ragManagedDbConfigInput: GoogleVertexAiRagEngineConfigRagManagedDbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiRagEngineConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagEngineConfigConfig <a name="GoogleVertexAiRagEngineConfigConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

const googleVertexAiRagEngineConfigConfig: googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.region">region</a></code> | <code>string</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```typescript
public readonly ragManagedDbConfig: GoogleVertexAiRagEngineConfigRagManagedDbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#rag_managed_db_config GoogleVertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#region GoogleVertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiRagEngineConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#timeouts GoogleVertexAiRagEngineConfig#timeouts}

---

### GoogleVertexAiRagEngineConfigRagManagedDbConfig <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

const googleVertexAiRagEngineConfigRagManagedDbConfig: googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```typescript
public readonly basic: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#basic GoogleVertexAiRagEngineConfig#basic}

---

##### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```typescript
public readonly scaled: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#scaled GoogleVertexAiRagEngineConfig#scaled}

---

##### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```typescript
public readonly unprovisioned: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#unprovisioned GoogleVertexAiRagEngineConfig#unprovisioned}

---

### GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

const googleVertexAiRagEngineConfigRagManagedDbConfigBasic: googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic = { ... }
```


### GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

const googleVertexAiRagEngineConfigRagManagedDbConfigScaled: googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled = { ... }
```


### GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

const googleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned: googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned = { ... }
```


### GoogleVertexAiRagEngineConfigTimeouts <a name="GoogleVertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

const googleVertexAiRagEngineConfigTimeouts: googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

new googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

new googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">putScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">putUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">resetScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">resetUnprovisioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```typescript
public putBasic(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `putScaled` <a name="putScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```typescript
public putScaled(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `putUnprovisioned` <a name="putUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```typescript
public putUnprovisioned(value: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```typescript
public resetBasic(): void
```

##### `resetScaled` <a name="resetScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```typescript
public resetScaled(): void
```

##### `resetUnprovisioned` <a name="resetUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```typescript
public resetUnprovisioned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">scaledInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">unprovisionedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```typescript
public readonly basic: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `scaled`<sup>Required</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```typescript
public readonly scaled: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `unprovisioned`<sup>Required</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```typescript
public readonly unprovisioned: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```typescript
public readonly basicInput: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `scaledInput`<sup>Optional</sup> <a name="scaledInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```typescript
public readonly scaledInput: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `unprovisionedInput`<sup>Optional</sup> <a name="unprovisionedInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```typescript
public readonly unprovisionedInput: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagEngineConfigRagManagedDbConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

new googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

new googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### GoogleVertexAiRagEngineConfigTimeoutsOutputReference <a name="GoogleVertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiRagEngineConfig } from '@cdktf/provider-google-beta'

new googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiRagEngineConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---



