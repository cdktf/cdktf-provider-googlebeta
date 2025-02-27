# `googleComposerEnvironment` Submodule <a name="`googleComposerEnvironment` Submodule" id="@cdktf/provider-google-beta.googleComposerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComposerEnvironment <a name="GoogleComposerEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironment(scope: Construct, id: string, config: GoogleComposerEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig">GoogleComposerEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig">GoogleComposerEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig">putStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetStorageConfig">resetStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig"></a>

```typescript
public putConfig(value: GoogleComposerEnvironmentConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---

##### `putStorageConfig` <a name="putStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig"></a>

```typescript
public putStorageConfig(value: GoogleComposerEnvironmentStorageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComposerEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStorageConfig` <a name="resetStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetStorageConfig"></a>

```typescript
public resetStorageConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComposerEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

googleComposerEnvironment.GoogleComposerEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComposerEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComposerEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComposerEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComposerEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference">GoogleComposerEnvironmentConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference">GoogleComposerEnvironmentStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference">GoogleComposerEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfigInput">storageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.config"></a>

```typescript
public readonly config: GoogleComposerEnvironmentConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference">GoogleComposerEnvironmentConfigAOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `storageConfig`<sup>Required</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfig"></a>

```typescript
public readonly storageConfig: GoogleComposerEnvironmentStorageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference">GoogleComposerEnvironmentStorageConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComposerEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference">GoogleComposerEnvironmentTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.configInput"></a>

```typescript
public readonly configInput: GoogleComposerEnvironmentConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `storageConfigInput`<sup>Optional</sup> <a name="storageConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.storageConfigInput"></a>

```typescript
public readonly storageConfigInput: GoogleComposerEnvironmentStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComposerEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComposerEnvironmentConfig <a name="GoogleComposerEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.storageConfig">storageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#name GoogleComposerEnvironment#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.config"></a>

```typescript
public readonly config: GoogleComposerEnvironmentConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#config GoogleComposerEnvironment#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#id GoogleComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#labels GoogleComposerEnvironment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#project GoogleComposerEnvironment#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#region GoogleComposerEnvironment#region}

---

##### `storageConfig`<sup>Optional</sup> <a name="storageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.storageConfig"></a>

```typescript
public readonly storageConfig: GoogleComposerEnvironmentStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#storage_config GoogleComposerEnvironment#storage_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComposerEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#timeouts GoogleComposerEnvironment#timeouts}

---

### GoogleComposerEnvironmentConfigA <a name="GoogleComposerEnvironmentConfigA" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigA: googleComposerEnvironment.GoogleComposerEnvironmentConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.databaseConfig">databaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | database_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.dataRetentionConfig">dataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | data_retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateBuildsOnly">enablePrivateBuildsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateEnvironment">enablePrivateEnvironment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. If true, a private Composer environment will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.environmentSize">environmentSize</a></code> | <code>string</code> | The size of the Cloud Composer environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig">masterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | master_authorized_networks_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.privateEnvironmentConfig">privateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | private_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.recoveryConfig">recoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | recovery_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.resilienceMode">resilienceMode</a></code> | <code>string</code> | Whether high resilience is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerConfig">webServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | web_server_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerNetworkAccessControl">webServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | web_server_network_access_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.workloadsConfig">workloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | workloads_config block. |

---

##### `databaseConfig`<sup>Optional</sup> <a name="databaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.databaseConfig"></a>

```typescript
public readonly databaseConfig: GoogleComposerEnvironmentConfigDatabaseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#database_config GoogleComposerEnvironment#database_config}

---

##### `dataRetentionConfig`<sup>Optional</sup> <a name="dataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.dataRetentionConfig"></a>

```typescript
public readonly dataRetentionConfig: GoogleComposerEnvironmentConfigDataRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

data_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#data_retention_config GoogleComposerEnvironment#data_retention_config}

---

##### `enablePrivateBuildsOnly`<sup>Optional</sup> <a name="enablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateBuildsOnly"></a>

```typescript
public readonly enablePrivateBuildsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enable_private_builds_only GoogleComposerEnvironment#enable_private_builds_only}

---

##### `enablePrivateEnvironment`<sup>Optional</sup> <a name="enablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.enablePrivateEnvironment"></a>

```typescript
public readonly enablePrivateEnvironment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. If true, a private Composer environment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enable_private_environment GoogleComposerEnvironment#enable_private_environment}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleComposerEnvironmentConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#encryption_config GoogleComposerEnvironment#encryption_config}

---

##### `environmentSize`<sup>Optional</sup> <a name="environmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.environmentSize"></a>

```typescript
public readonly environmentSize: string;
```

- *Type:* string

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#environment_size GoogleComposerEnvironment#environment_size}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleComposerEnvironmentConfigMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#maintenance_window GoogleComposerEnvironment#maintenance_window}

---

##### `masterAuthorizedNetworksConfig`<sup>Optional</sup> <a name="masterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig"></a>

```typescript
public readonly masterAuthorizedNetworksConfig: GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#master_authorized_networks_config GoogleComposerEnvironment#master_authorized_networks_config}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleComposerEnvironmentConfigNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#node_config GoogleComposerEnvironment#node_config}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#node_count GoogleComposerEnvironment#node_count}

---

##### `privateEnvironmentConfig`<sup>Optional</sup> <a name="privateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.privateEnvironmentConfig"></a>

```typescript
public readonly privateEnvironmentConfig: GoogleComposerEnvironmentConfigPrivateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#private_environment_config GoogleComposerEnvironment#private_environment_config}

---

##### `recoveryConfig`<sup>Optional</sup> <a name="recoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.recoveryConfig"></a>

```typescript
public readonly recoveryConfig: GoogleComposerEnvironmentConfigRecoveryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#recovery_config GoogleComposerEnvironment#recovery_config}

---

##### `resilienceMode`<sup>Optional</sup> <a name="resilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.resilienceMode"></a>

```typescript
public readonly resilienceMode: string;
```

- *Type:* string

Whether high resilience is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#resilience_mode GoogleComposerEnvironment#resilience_mode}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.softwareConfig"></a>

```typescript
public readonly softwareConfig: GoogleComposerEnvironmentConfigSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#software_config GoogleComposerEnvironment#software_config}

---

##### `webServerConfig`<sup>Optional</sup> <a name="webServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerConfig"></a>

```typescript
public readonly webServerConfig: GoogleComposerEnvironmentConfigWebServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#web_server_config GoogleComposerEnvironment#web_server_config}

---

##### `webServerNetworkAccessControl`<sup>Optional</sup> <a name="webServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.webServerNetworkAccessControl"></a>

```typescript
public readonly webServerNetworkAccessControl: GoogleComposerEnvironmentConfigWebServerNetworkAccessControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#web_server_network_access_control GoogleComposerEnvironment#web_server_network_access_control}

---

##### `workloadsConfig`<sup>Optional</sup> <a name="workloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA.property.workloadsConfig"></a>

```typescript
public readonly workloadsConfig: GoogleComposerEnvironmentConfigWorkloadsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#workloads_config GoogleComposerEnvironment#workloads_config}

---

### GoogleComposerEnvironmentConfigDatabaseConfig <a name="GoogleComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigDatabaseConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.machineType">machineType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.zone">zone</a></code> | <code>string</code> | Optional. Cloud SQL database preferred zone. |

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Optional. Cloud SQL database preferred zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#zone GoogleComposerEnvironment#zone}

---

### GoogleComposerEnvironmentConfigDataRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigDataRetentionConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig">airflowMetadataRetentionConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]</code> | airflow_metadata_retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig">taskLogsRetentionConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]</code> | task_logs_retention_config block. |

---

##### `airflowMetadataRetentionConfig`<sup>Optional</sup> <a name="airflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig"></a>

```typescript
public readonly airflowMetadataRetentionConfig: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]

airflow_metadata_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#airflow_metadata_retention_config GoogleComposerEnvironment#airflow_metadata_retention_config}

---

##### `taskLogsRetentionConfig`<sup>Optional</sup> <a name="taskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig"></a>

```typescript
public readonly taskLogsRetentionConfig: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

task_logs_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#task_logs_retention_config GoogleComposerEnvironment#task_logs_retention_config}

---

### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | How many days data should be retained for. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode">retentionMode</a></code> | <code>string</code> | Whether database retention is enabled or not. |

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

How many days data should be retained for.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#retention_days GoogleComposerEnvironment#retention_days}

---

##### `retentionMode`<sup>Optional</sup> <a name="retentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode"></a>

```typescript
public readonly retentionMode: string;
```

- *Type:* string

Whether database retention is enabled or not.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#retention_mode GoogleComposerEnvironment#retention_mode}

---

### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode">storageMode</a></code> | <code>string</code> | Whether logs in cloud logging only is enabled or not. |

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode"></a>

```typescript
public readonly storageMode: string;
```

- *Type:* string

Whether logs in cloud logging only is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4 and newer but not in composer-3*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#storage_mode GoogleComposerEnvironment#storage_mode}

---

### GoogleComposerEnvironmentConfigEncryptionConfig <a name="GoogleComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigEncryptionConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#kms_key_name GoogleComposerEnvironment#kms_key_name}

---

### GoogleComposerEnvironmentConfigMaintenanceWindow <a name="GoogleComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigMaintenanceWindow: googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.endTime">endTime</a></code> | <code>string</code> | Maintenance window end time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.recurrence">recurrence</a></code> | <code>string</code> | Maintenance window recurrence. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.startTime">startTime</a></code> | <code>string</code> | Start time of the first recurrence of the maintenance window. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#end_time GoogleComposerEnvironment#end_time}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#recurrence GoogleComposerEnvironment#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#start_time GoogleComposerEnvironment#start_time}

---

### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigMasterAuthorizedNetworksConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not master authorized networks is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]</code> | cidr_blocks block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: IResolvable | GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

cidr_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cidr_blocks GoogleComposerEnvironment#cidr_blocks}

---

### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks: googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | cidr_block must be specified in CIDR notation. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName">displayName</a></code> | <code>string</code> | display_name is a field for users to identify CIDR blocks. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

cidr_block must be specified in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cidr_block GoogleComposerEnvironment#cidr_block}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

display_name is a field for users to identify CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#display_name GoogleComposerEnvironment#display_name}

---

### GoogleComposerEnvironmentConfigNodeConfig <a name="GoogleComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigNodeConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock">composerInternalIpv4CidrBlock</a></code> | <code>string</code> | IPv4 cidr range that will be used by Composer internal components. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment">composerNetworkAttachment</a></code> | <code>string</code> | PSC (Private Service Connect) Network entry point. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | The disk size in GB used for node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent">enableIpMasqAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | ip_allocation_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.machineType">machineType</a></code> | <code>string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum pods per node in the GKE cluster allocated during environment creation. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.network">network</a></code> | <code>string</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | The set of Google API scopes to be made available on all node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.tags">tags</a></code> | <code>string[]</code> | The list of instance tags applied to all node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.zone">zone</a></code> | <code>string</code> | The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. |

---

##### `composerInternalIpv4CidrBlock`<sup>Optional</sup> <a name="composerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock"></a>

```typescript
public readonly composerInternalIpv4CidrBlock: string;
```

- *Type:* string

IPv4 cidr range that will be used by Composer internal components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#composer_internal_ipv4_cidr_block GoogleComposerEnvironment#composer_internal_ipv4_cidr_block}

---

##### `composerNetworkAttachment`<sup>Optional</sup> <a name="composerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment"></a>

```typescript
public readonly composerNetworkAttachment: string;
```

- *Type:* string

PSC (Private Service Connect) Network entry point.

Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#composer_network_attachment GoogleComposerEnvironment#composer_network_attachment}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#disk_size_gb GoogleComposerEnvironment#disk_size_gb}

---

##### `enableIpMasqAgent`<sup>Optional</sup> <a name="enableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent"></a>

```typescript
public readonly enableIpMasqAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enable_ip_masq_agent GoogleComposerEnvironment#enable_ip_masq_agent}

---

##### `ipAllocationPolicy`<sup>Optional</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

ip_allocation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#ip_allocation_policy GoogleComposerEnvironment#ip_allocation_policy}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum pods per node in the GKE cluster allocated during environment creation.

Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#max_pods_per_node GoogleComposerEnvironment#max_pods_per_node}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#network GoogleComposerEnvironment#network}

---

##### `oauthScopes`<sup>Optional</sup> <a name="oauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#oauth_scopes GoogleComposerEnvironment#oauth_scopes}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#service_account GoogleComposerEnvironment#service_account}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#subnetwork GoogleComposerEnvironment#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#tags GoogleComposerEnvironment#tags}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#zone GoogleComposerEnvironment#zone}

---

### GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigNodeConfigIpAllocationPolicy: googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock">clusterIpv4CidrBlock</a></code> | <code>string</code> | The IP address range used to allocate IP addresses to pods in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName">clusterSecondaryRangeName</a></code> | <code>string</code> | The name of the cluster's secondary range used to allocate IP addresses to pods. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock">servicesIpv4CidrBlock</a></code> | <code>string</code> | The IP address range used to allocate IP addresses in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName">servicesSecondaryRangeName</a></code> | <code>string</code> | The name of the services' secondary range used to allocate IP addresses to the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases">useIpAliases</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to enable Alias IPs in the GKE cluster. |

---

##### `clusterIpv4CidrBlock`<sup>Optional</sup> <a name="clusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock"></a>

```typescript
public readonly clusterIpv4CidrBlock: string;
```

- *Type:* string

The IP address range used to allocate IP addresses to pods in the cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cluster_ipv4_cidr_block GoogleComposerEnvironment#cluster_ipv4_cidr_block}

---

##### `clusterSecondaryRangeName`<sup>Optional</sup> <a name="clusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName"></a>

```typescript
public readonly clusterSecondaryRangeName: string;
```

- *Type:* string

The name of the cluster's secondary range used to allocate IP addresses to pods.

Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cluster_secondary_range_name GoogleComposerEnvironment#cluster_secondary_range_name}

---

##### `servicesIpv4CidrBlock`<sup>Optional</sup> <a name="servicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock"></a>

```typescript
public readonly servicesIpv4CidrBlock: string;
```

- *Type:* string

The IP address range used to allocate IP addresses in this cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either services_secondary_range_name or services_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#services_ipv4_cidr_block GoogleComposerEnvironment#services_ipv4_cidr_block}

---

##### `servicesSecondaryRangeName`<sup>Optional</sup> <a name="servicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName"></a>

```typescript
public readonly servicesSecondaryRangeName: string;
```

- *Type:* string

The name of the services' secondary range used to allocate IP addresses to the cluster.

Specify either services_secondary_range_name or services_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#services_secondary_range_name GoogleComposerEnvironment#services_secondary_range_name}

---

##### `useIpAliases`<sup>Optional</sup> <a name="useIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases"></a>

```typescript
public readonly useIpAliases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to enable Alias IPs in the GKE cluster.

If true, a VPC-native cluster is created. Defaults to true if the ip_allocation_policy block is present in config. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#use_ip_aliases GoogleComposerEnvironment#use_ip_aliases}

---

### GoogleComposerEnvironmentConfigPrivateEnvironmentConfig <a name="GoogleComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigPrivateEnvironmentConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork">cloudComposerConnectionSubnetwork</a></code> | <code>string</code> | When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock">cloudComposerNetworkIpv4CidrBlock</a></code> | <code>string</code> | The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock">cloudSqlIpv4CidrBlock</a></code> | <code>string</code> | The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, access to the public endpoint of the GKE cluster is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps">enablePrivatelyUsedPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock">masterIpv4CidrBlock</a></code> | <code>string</code> | The IP range in CIDR notation to use for the hosted master network. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock">webServerIpv4CidrBlock</a></code> | <code>string</code> | The CIDR block from which IP range for web server will be reserved. |

---

##### `cloudComposerConnectionSubnetwork`<sup>Optional</sup> <a name="cloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork"></a>

```typescript
public readonly cloudComposerConnectionSubnetwork: string;
```

- *Type:* string

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cloud_composer_connection_subnetwork GoogleComposerEnvironment#cloud_composer_connection_subnetwork}

---

##### `cloudComposerNetworkIpv4CidrBlock`<sup>Optional</sup> <a name="cloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock"></a>

```typescript
public readonly cloudComposerNetworkIpv4CidrBlock: string;
```

- *Type:* string

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cloud_composer_network_ipv4_cidr_block GoogleComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

##### `cloudSqlIpv4CidrBlock`<sup>Optional</sup> <a name="cloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock"></a>

```typescript
public readonly cloudSqlIpv4CidrBlock: string;
```

- *Type:* string

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cloud_sql_ipv4_cidr_block GoogleComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#connection_type GoogleComposerEnvironment#connection_type}

---

##### `enablePrivateEndpoint`<sup>Optional</sup> <a name="enablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enable_private_endpoint GoogleComposerEnvironment#enable_private_endpoint}

---

##### `enablePrivatelyUsedPublicIps`<sup>Optional</sup> <a name="enablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps"></a>

```typescript
public readonly enablePrivatelyUsedPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enable_privately_used_public_ips GoogleComposerEnvironment#enable_privately_used_public_ips}

---

##### `masterIpv4CidrBlock`<sup>Optional</sup> <a name="masterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock"></a>

```typescript
public readonly masterIpv4CidrBlock: string;
```

- *Type:* string

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#master_ipv4_cidr_block GoogleComposerEnvironment#master_ipv4_cidr_block}

---

##### `webServerIpv4CidrBlock`<sup>Optional</sup> <a name="webServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock"></a>

```typescript
public readonly webServerIpv4CidrBlock: string;
```

- *Type:* string

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#web_server_ipv4_cidr_block GoogleComposerEnvironment#web_server_ipv4_cidr_block}

---

### GoogleComposerEnvironmentConfigRecoveryConfig <a name="GoogleComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigRecoveryConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig">scheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | scheduled_snapshots_config block. |

---

##### `scheduledSnapshotsConfig`<sup>Optional</sup> <a name="scheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig"></a>

```typescript
public readonly scheduledSnapshotsConfig: GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#scheduled_snapshots_config GoogleComposerEnvironment#scheduled_snapshots_config}

---

### GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule">snapshotCreationSchedule</a></code> | <code>string</code> | Snapshot schedule, in the unix-cron format. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation">snapshotLocation</a></code> | <code>string</code> | the URI of a bucket folder where to save the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone">timeZone</a></code> | <code>string</code> | A time zone for the schedule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

##### `snapshotCreationSchedule`<sup>Optional</sup> <a name="snapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule"></a>

```typescript
public readonly snapshotCreationSchedule: string;
```

- *Type:* string

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#snapshot_creation_schedule GoogleComposerEnvironment#snapshot_creation_schedule}

---

##### `snapshotLocation`<sup>Optional</sup> <a name="snapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation"></a>

```typescript
public readonly snapshotLocation: string;
```

- *Type:* string

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#snapshot_location GoogleComposerEnvironment#snapshot_location}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#time_zone GoogleComposerEnvironment#time_zone}

---

### GoogleComposerEnvironmentConfigSoftwareConfig <a name="GoogleComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigSoftwareConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides">airflowConfigOverrides</a></code> | <code>{[ key: string ]: string}</code> | Apache Airflow configuration properties to override. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration">cloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | cloud_data_lineage_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.imageVersion">imageVersion</a></code> | <code>string</code> | The version of the software running in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pypiPackages">pypiPackages</a></code> | <code>{[ key: string ]: string}</code> | Custom Python Package Index (PyPI) packages to be installed in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.schedulerCount">schedulerCount</a></code> | <code>number</code> | The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode">webServerPluginsMode</a></code> | <code>string</code> | Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3. |

---

##### `airflowConfigOverrides`<sup>Optional</sup> <a name="airflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides"></a>

```typescript
public readonly airflowConfigOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#airflow_config_overrides GoogleComposerEnvironment#airflow_config_overrides}

---

##### `cloudDataLineageIntegration`<sup>Optional</sup> <a name="cloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration"></a>

```typescript
public readonly cloudDataLineageIntegration: GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

cloud_data_lineage_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cloud_data_lineage_integration GoogleComposerEnvironment#cloud_data_lineage_integration}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#env_variables GoogleComposerEnvironment#env_variables}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#image_version GoogleComposerEnvironment#image_version}

---

##### `pypiPackages`<sup>Optional</sup> <a name="pypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pypiPackages"></a>

```typescript
public readonly pypiPackages: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#pypi_packages GoogleComposerEnvironment#pypi_packages}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#python_version GoogleComposerEnvironment#python_version}

---

##### `schedulerCount`<sup>Optional</sup> <a name="schedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.schedulerCount"></a>

```typescript
public readonly schedulerCount: number;
```

- *Type:* number

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#scheduler_count GoogleComposerEnvironment#scheduler_count}

---

##### `webServerPluginsMode`<sup>Optional</sup> <a name="webServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode"></a>

```typescript
public readonly webServerPluginsMode: string;
```

- *Type:* string

Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#web_server_plugins_mode GoogleComposerEnvironment#web_server_plugins_mode}

---

### GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration <a name="GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration: googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not Cloud Data Lineage integration is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not Cloud Data Lineage integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#enabled GoogleComposerEnvironment#enabled}

---

### GoogleComposerEnvironmentConfigWebServerConfig <a name="GoogleComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWebServerConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.property.machineType">machineType</a></code> | <code>string</code> | Optional. |

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#machine_type GoogleComposerEnvironment#machine_type}

---

### GoogleComposerEnvironmentConfigWebServerNetworkAccessControl <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWebServerNetworkAccessControl: googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange">allowedIpRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]</code> | allowed_ip_range block. |

---

##### `allowedIpRange`<sup>Optional</sup> <a name="allowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: IResolvable | GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

allowed_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#allowed_ip_range GoogleComposerEnvironment#allowed_ip_range}

---

### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange: googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value">value</a></code> | <code>string</code> | IP address or range, defined using CIDR notation, of requests that this rule applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description">description</a></code> | <code>string</code> | A description of this ip range. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

IP address or range, defined using CIDR notation, of requests that this rule applies to.

Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#value GoogleComposerEnvironment#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this ip range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#description GoogleComposerEnvironment#description}

---

### GoogleComposerEnvironmentConfigWorkloadsConfig <a name="GoogleComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWorkloadsConfig: googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor">dagProcessor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | dag_processor block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | scheduler block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | triggerer block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.webServer">webServer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | web_server block. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | worker block. |

---

##### `dagProcessor`<sup>Optional</sup> <a name="dagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor"></a>

```typescript
public readonly dagProcessor: GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

dag_processor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#dag_processor GoogleComposerEnvironment#dag_processor}

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.scheduler"></a>

```typescript
public readonly scheduler: GoogleComposerEnvironmentConfigWorkloadsConfigScheduler;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#scheduler GoogleComposerEnvironment#scheduler}

---

##### `triggerer`<sup>Optional</sup> <a name="triggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.triggerer"></a>

```typescript
public readonly triggerer: GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

triggerer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#triggerer GoogleComposerEnvironment#triggerer}

---

##### `webServer`<sup>Optional</sup> <a name="webServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.webServer"></a>

```typescript
public readonly webServer: GoogleComposerEnvironmentConfigWorkloadsConfigWebServer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#web_server GoogleComposerEnvironment#web_server}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig.property.worker"></a>

```typescript
public readonly worker: GoogleComposerEnvironmentConfigWorkloadsConfigWorker;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#worker GoogleComposerEnvironment#worker}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor <a name="GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWorkloadsConfigDagProcessor: googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count">count</a></code> | <code>number</code> | Number of DAG processors. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for DAG processor. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of DAG processors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigScheduler <a name="GoogleComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWorkloadsConfigScheduler: googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.count">count</a></code> | <code>number</code> | The number of schedulers. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for a single Airflow scheduler replica. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWorkloadsConfigTriggerer: googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count">count</a></code> | <code>number</code> | The number of triggerers. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for a single Airflow triggerer replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for a single Airflow triggerer replica. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of triggerers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#count GoogleComposerEnvironment#count}

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigWebServer <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWorkloadsConfigWebServer: googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for Airflow web server. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentConfigWorkloadsConfigWorker <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentConfigWorkloadsConfigWorker: googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu">cpu</a></code> | <code>number</code> | CPU request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount">maxCount</a></code> | <code>number</code> | Maximum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount">minCount</a></code> | <code>number</code> | Minimum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb">storageGb</a></code> | <code>number</code> | Storage (GB) request and limit for a single Airflow worker replica. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#cpu GoogleComposerEnvironment#cpu}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#max_count GoogleComposerEnvironment#max_count}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#memory_gb GoogleComposerEnvironment#memory_gb}

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#min_count GoogleComposerEnvironment#min_count}

---

##### `storageGb`<sup>Optional</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#storage_gb GoogleComposerEnvironment#storage_gb}

---

### GoogleComposerEnvironmentStorageConfig <a name="GoogleComposerEnvironmentStorageConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentStorageConfig: googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.property.bucket">bucket</a></code> | <code>string</code> | Optional. Name of an existing Cloud Storage bucket to be used by the environment. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Optional. Name of an existing Cloud Storage bucket to be used by the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#bucket GoogleComposerEnvironment#bucket}

---

### GoogleComposerEnvironmentTimeouts <a name="GoogleComposerEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

const googleComposerEnvironmentTimeouts: googleComposerEnvironment.GoogleComposerEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#create GoogleComposerEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#delete GoogleComposerEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#update GoogleComposerEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#create GoogleComposerEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#delete GoogleComposerEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_composer_environment#update GoogleComposerEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComposerEnvironmentConfigAOutputReference <a name="GoogleComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig">putDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig">putDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig">putMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig">putPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig">putRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig">putWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl">putWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig">putWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDatabaseConfig">resetDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig">resetDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly">resetEnablePrivateBuildsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment">resetEnablePrivateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnvironmentSize">resetEnvironmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig">resetMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig">resetPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetRecoveryConfig">resetRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetResilienceMode">resetResilienceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerConfig">resetWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl">resetWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig">resetWorkloadsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseConfig` <a name="putDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig"></a>

```typescript
public putDatabaseConfig(value: GoogleComposerEnvironmentConfigDatabaseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---

##### `putDataRetentionConfig` <a name="putDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig"></a>

```typescript
public putDataRetentionConfig(value: GoogleComposerEnvironmentConfigDataRetentionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putDataRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: GoogleComposerEnvironmentConfigEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: GoogleComposerEnvironmentConfigMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `putMasterAuthorizedNetworksConfig` <a name="putMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig"></a>

```typescript
public putMasterAuthorizedNetworksConfig(value: GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig"></a>

```typescript
public putNodeConfig(value: GoogleComposerEnvironmentConfigNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---

##### `putPrivateEnvironmentConfig` <a name="putPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig"></a>

```typescript
public putPrivateEnvironmentConfig(value: GoogleComposerEnvironmentConfigPrivateEnvironmentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `putRecoveryConfig` <a name="putRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig"></a>

```typescript
public putRecoveryConfig(value: GoogleComposerEnvironmentConfigRecoveryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putRecoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig"></a>

```typescript
public putSoftwareConfig(value: GoogleComposerEnvironmentConfigSoftwareConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---

##### `putWebServerConfig` <a name="putWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig"></a>

```typescript
public putWebServerConfig(value: GoogleComposerEnvironmentConfigWebServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---

##### `putWebServerNetworkAccessControl` <a name="putWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl"></a>

```typescript
public putWebServerNetworkAccessControl(value: GoogleComposerEnvironmentConfigWebServerNetworkAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `putWorkloadsConfig` <a name="putWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig"></a>

```typescript
public putWorkloadsConfig(value: GoogleComposerEnvironmentConfigWorkloadsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `resetDatabaseConfig` <a name="resetDatabaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDatabaseConfig"></a>

```typescript
public resetDatabaseConfig(): void
```

##### `resetDataRetentionConfig` <a name="resetDataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig"></a>

```typescript
public resetDataRetentionConfig(): void
```

##### `resetEnablePrivateBuildsOnly` <a name="resetEnablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly"></a>

```typescript
public resetEnablePrivateBuildsOnly(): void
```

##### `resetEnablePrivateEnvironment` <a name="resetEnablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment"></a>

```typescript
public resetEnablePrivateEnvironment(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetEnvironmentSize` <a name="resetEnvironmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetEnvironmentSize"></a>

```typescript
public resetEnvironmentSize(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMasterAuthorizedNetworksConfig` <a name="resetMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig"></a>

```typescript
public resetMasterAuthorizedNetworksConfig(): void
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeConfig"></a>

```typescript
public resetNodeConfig(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetPrivateEnvironmentConfig` <a name="resetPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig"></a>

```typescript
public resetPrivateEnvironmentConfig(): void
```

##### `resetRecoveryConfig` <a name="resetRecoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetRecoveryConfig"></a>

```typescript
public resetRecoveryConfig(): void
```

##### `resetResilienceMode` <a name="resetResilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetResilienceMode"></a>

```typescript
public resetResilienceMode(): void
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetSoftwareConfig"></a>

```typescript
public resetSoftwareConfig(): void
```

##### `resetWebServerConfig` <a name="resetWebServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerConfig"></a>

```typescript
public resetWebServerConfig(): void
```

##### `resetWebServerNetworkAccessControl` <a name="resetWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl"></a>

```typescript
public resetWebServerNetworkAccessControl(): void
```

##### `resetWorkloadsConfig` <a name="resetWorkloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig"></a>

```typescript
public resetWorkloadsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.airflowUri">airflowUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">dagGcsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig">databaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference">GoogleComposerEnvironmentConfigDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig">dataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference">GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference">GoogleComposerEnvironmentConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster">gkeCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference">GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">masterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference">GoogleComposerEnvironmentConfigNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">privateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig">recoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig">webServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference">GoogleComposerEnvironmentConfigWebServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">webServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig">workloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfigInput">databaseConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput">dataRetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput">enablePrivateBuildsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput">enablePrivateEnvironmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSizeInput">environmentSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput">masterAuthorizedNetworksConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput">privateEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput">recoveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceModeInput">resilienceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfigInput">webServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput">webServerNetworkAccessControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput">workloadsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly">enablePrivateBuildsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment">enablePrivateEnvironment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSize">environmentSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode">resilienceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `airflowUri`<sup>Required</sup> <a name="airflowUri" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```typescript
public readonly airflowUri: string;
```

- *Type:* string

---

##### `dagGcsPrefix`<sup>Required</sup> <a name="dagGcsPrefix" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```typescript
public readonly dagGcsPrefix: string;
```

- *Type:* string

---

##### `databaseConfig`<sup>Required</sup> <a name="databaseConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```typescript
public readonly databaseConfig: GoogleComposerEnvironmentConfigDatabaseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference">GoogleComposerEnvironmentConfigDatabaseConfigOutputReference</a>

---

##### `dataRetentionConfig`<sup>Required</sup> <a name="dataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig"></a>

```typescript
public readonly dataRetentionConfig: GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference">GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleComposerEnvironmentConfigEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference">GoogleComposerEnvironmentConfigEncryptionConfigOutputReference</a>

---

##### `gkeCluster`<sup>Required</sup> <a name="gkeCluster" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```typescript
public readonly gkeCluster: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference">GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference</a>

---

##### `masterAuthorizedNetworksConfig`<sup>Required</sup> <a name="masterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```typescript
public readonly masterAuthorizedNetworksConfig: GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleComposerEnvironmentConfigNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference">GoogleComposerEnvironmentConfigNodeConfigOutputReference</a>

---

##### `privateEnvironmentConfig`<sup>Required</sup> <a name="privateEnvironmentConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```typescript
public readonly privateEnvironmentConfig: GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a>

---

##### `recoveryConfig`<sup>Required</sup> <a name="recoveryConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```typescript
public readonly recoveryConfig: GoogleComposerEnvironmentConfigRecoveryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```typescript
public readonly softwareConfig: GoogleComposerEnvironmentConfigSoftwareConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigOutputReference</a>

---

##### `webServerConfig`<sup>Required</sup> <a name="webServerConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```typescript
public readonly webServerConfig: GoogleComposerEnvironmentConfigWebServerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference">GoogleComposerEnvironmentConfigWebServerConfigOutputReference</a>

---

##### `webServerNetworkAccessControl`<sup>Required</sup> <a name="webServerNetworkAccessControl" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```typescript
public readonly webServerNetworkAccessControl: GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a>

---

##### `workloadsConfig`<sup>Required</sup> <a name="workloadsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```typescript
public readonly workloadsConfig: GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference</a>

---

##### `databaseConfigInput`<sup>Optional</sup> <a name="databaseConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.databaseConfigInput"></a>

```typescript
public readonly databaseConfigInput: GoogleComposerEnvironmentConfigDatabaseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---

##### `dataRetentionConfigInput`<sup>Optional</sup> <a name="dataRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput"></a>

```typescript
public readonly dataRetentionConfigInput: GoogleComposerEnvironmentConfigDataRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `enablePrivateBuildsOnlyInput`<sup>Optional</sup> <a name="enablePrivateBuildsOnlyInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput"></a>

```typescript
public readonly enablePrivateBuildsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivateEnvironmentInput`<sup>Optional</sup> <a name="enablePrivateEnvironmentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput"></a>

```typescript
public readonly enablePrivateEnvironmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: GoogleComposerEnvironmentConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---

##### `environmentSizeInput`<sup>Optional</sup> <a name="environmentSizeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSizeInput"></a>

```typescript
public readonly environmentSizeInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: GoogleComposerEnvironmentConfigMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `masterAuthorizedNetworksConfigInput`<sup>Optional</sup> <a name="masterAuthorizedNetworksConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput"></a>

```typescript
public readonly masterAuthorizedNetworksConfigInput: GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: GoogleComposerEnvironmentConfigNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `privateEnvironmentConfigInput`<sup>Optional</sup> <a name="privateEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput"></a>

```typescript
public readonly privateEnvironmentConfigInput: GoogleComposerEnvironmentConfigPrivateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `recoveryConfigInput`<sup>Optional</sup> <a name="recoveryConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput"></a>

```typescript
public readonly recoveryConfigInput: GoogleComposerEnvironmentConfigRecoveryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---

##### `resilienceModeInput`<sup>Optional</sup> <a name="resilienceModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceModeInput"></a>

```typescript
public readonly resilienceModeInput: string;
```

- *Type:* string

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.softwareConfigInput"></a>

```typescript
public readonly softwareConfigInput: GoogleComposerEnvironmentConfigSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---

##### `webServerConfigInput`<sup>Optional</sup> <a name="webServerConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerConfigInput"></a>

```typescript
public readonly webServerConfigInput: GoogleComposerEnvironmentConfigWebServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---

##### `webServerNetworkAccessControlInput`<sup>Optional</sup> <a name="webServerNetworkAccessControlInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput"></a>

```typescript
public readonly webServerNetworkAccessControlInput: GoogleComposerEnvironmentConfigWebServerNetworkAccessControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `workloadsConfigInput`<sup>Optional</sup> <a name="workloadsConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput"></a>

```typescript
public readonly workloadsConfigInput: GoogleComposerEnvironmentConfigWorkloadsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `enablePrivateBuildsOnly`<sup>Required</sup> <a name="enablePrivateBuildsOnly" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly"></a>

```typescript
public readonly enablePrivateBuildsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivateEnvironment`<sup>Required</sup> <a name="enablePrivateEnvironment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment"></a>

```typescript
public readonly enablePrivateEnvironment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentSize`<sup>Required</sup> <a name="environmentSize" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```typescript
public readonly environmentSize: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `resilienceMode`<sup>Required</sup> <a name="resilienceMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.resilienceMode"></a>

```typescript
public readonly resilienceMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigA">GoogleComposerEnvironmentConfigA</a>

---


### GoogleComposerEnvironmentConfigDatabaseConfigOutputReference <a name="GoogleComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigDatabaseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDatabaseConfig">GoogleComposerEnvironmentConfigDatabaseConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get"></a>

```typescript
public get(index: number): GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]

---


### GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode">resetRetentionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetRetentionMode` <a name="resetRetentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode"></a>

```typescript
public resetRetentionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput">retentionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode">retentionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `retentionModeInput`<sup>Optional</sup> <a name="retentionModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput"></a>

```typescript
public readonly retentionModeInput: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `retentionMode`<sup>Required</sup> <a name="retentionMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode"></a>

```typescript
public readonly retentionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig">putAirflowMetadataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig">putTaskLogsRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig">resetAirflowMetadataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig">resetTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAirflowMetadataRetentionConfig` <a name="putAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig"></a>

```typescript
public putAirflowMetadataRetentionConfig(value: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]

---

##### `putTaskLogsRetentionConfig` <a name="putTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig"></a>

```typescript
public putTaskLogsRetentionConfig(value: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

---

##### `resetAirflowMetadataRetentionConfig` <a name="resetAirflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig"></a>

```typescript
public resetAirflowMetadataRetentionConfig(): void
```

##### `resetTaskLogsRetentionConfig` <a name="resetTaskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig"></a>

```typescript
public resetTaskLogsRetentionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig">airflowMetadataRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig">taskLogsRetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput">airflowMetadataRetentionConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput">taskLogsRetentionConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `airflowMetadataRetentionConfig`<sup>Required</sup> <a name="airflowMetadataRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig"></a>

```typescript
public readonly airflowMetadataRetentionConfig: GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a>

---

##### `taskLogsRetentionConfig`<sup>Required</sup> <a name="taskLogsRetentionConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig"></a>

```typescript
public readonly taskLogsRetentionConfig: GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a>

---

##### `airflowMetadataRetentionConfigInput`<sup>Optional</sup> <a name="airflowMetadataRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput"></a>

```typescript
public readonly airflowMetadataRetentionConfigInput: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>[]

---

##### `taskLogsRetentionConfigInput`<sup>Optional</sup> <a name="taskLogsRetentionConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput"></a>

```typescript
public readonly taskLogsRetentionConfigInput: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigDataRetentionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get"></a>

```typescript
public get(index: number): GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>[]

---


### GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference <a name="GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode">resetStorageMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageMode` <a name="resetStorageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode"></a>

```typescript
public resetStorageMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput">storageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode">storageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageModeInput`<sup>Optional</sup> <a name="storageModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput"></a>

```typescript
public readonly storageModeInput: string;
```

- *Type:* string

---

##### `storageMode`<sup>Required</sup> <a name="storageMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode"></a>

```typescript
public readonly storageMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">GoogleComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>

---


### GoogleComposerEnvironmentConfigEncryptionConfigOutputReference <a name="GoogleComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigEncryptionConfig">GoogleComposerEnvironmentConfigEncryptionConfig</a>

---


### GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMaintenanceWindow">GoogleComposerEnvironmentConfigMaintenanceWindow</a>

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```typescript
public get(index: number): GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>

---


### GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks">putCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCidrBlocks` <a name="putCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks"></a>

```typescript
public putCidrBlocks(value: IResolvable | GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: IResolvable | GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">GoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock">resetClusterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName">resetClusterSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock">resetServicesIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName">resetServicesSecondaryRangeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases">resetUseIpAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterIpv4CidrBlock` <a name="resetClusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock"></a>

```typescript
public resetClusterIpv4CidrBlock(): void
```

##### `resetClusterSecondaryRangeName` <a name="resetClusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName"></a>

```typescript
public resetClusterSecondaryRangeName(): void
```

##### `resetServicesIpv4CidrBlock` <a name="resetServicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock"></a>

```typescript
public resetServicesIpv4CidrBlock(): void
```

##### `resetServicesSecondaryRangeName` <a name="resetServicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName"></a>

```typescript
public resetServicesSecondaryRangeName(): void
```

##### `resetUseIpAliases` <a name="resetUseIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases"></a>

```typescript
public resetUseIpAliases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput">clusterIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput">clusterSecondaryRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput">servicesIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput">servicesSecondaryRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput">useIpAliasesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">clusterIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">clusterSecondaryRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">servicesIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">servicesSecondaryRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">useIpAliases</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIpv4CidrBlockInput`<sup>Optional</sup> <a name="clusterIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput"></a>

```typescript
public readonly clusterIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `clusterSecondaryRangeNameInput`<sup>Optional</sup> <a name="clusterSecondaryRangeNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput"></a>

```typescript
public readonly clusterSecondaryRangeNameInput: string;
```

- *Type:* string

---

##### `servicesIpv4CidrBlockInput`<sup>Optional</sup> <a name="servicesIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput"></a>

```typescript
public readonly servicesIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `servicesSecondaryRangeNameInput`<sup>Optional</sup> <a name="servicesSecondaryRangeNameInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput"></a>

```typescript
public readonly servicesSecondaryRangeNameInput: string;
```

- *Type:* string

---

##### `useIpAliasesInput`<sup>Optional</sup> <a name="useIpAliasesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput"></a>

```typescript
public readonly useIpAliasesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIpv4CidrBlock`<sup>Required</sup> <a name="clusterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```typescript
public readonly clusterIpv4CidrBlock: string;
```

- *Type:* string

---

##### `clusterSecondaryRangeName`<sup>Required</sup> <a name="clusterSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```typescript
public readonly clusterSecondaryRangeName: string;
```

- *Type:* string

---

##### `servicesIpv4CidrBlock`<sup>Required</sup> <a name="servicesIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```typescript
public readonly servicesIpv4CidrBlock: string;
```

- *Type:* string

---

##### `servicesSecondaryRangeName`<sup>Required</sup> <a name="servicesSecondaryRangeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```typescript
public readonly servicesSecondaryRangeName: string;
```

- *Type:* string

---

##### `useIpAliases`<sup>Required</sup> <a name="useIpAliases" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```typescript
public readonly useIpAliases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### GoogleComposerEnvironmentConfigNodeConfigOutputReference <a name="GoogleComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy">putIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock">resetComposerInternalIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment">resetComposerNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent">resetEnableIpMasqAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy">resetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes">resetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAllocationPolicy` <a name="putIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy"></a>

```typescript
public putIpAllocationPolicy(value: GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `resetComposerInternalIpv4CidrBlock` <a name="resetComposerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock"></a>

```typescript
public resetComposerInternalIpv4CidrBlock(): void
```

##### `resetComposerNetworkAttachment` <a name="resetComposerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment"></a>

```typescript
public resetComposerNetworkAttachment(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetEnableIpMasqAgent` <a name="resetEnableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent"></a>

```typescript
public resetEnableIpMasqAgent(): void
```

##### `resetIpAllocationPolicy` <a name="resetIpAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy"></a>

```typescript
public resetIpAllocationPolicy(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetMaxPodsPerNode"></a>

```typescript
public resetMaxPodsPerNode(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetOauthScopes` <a name="resetOauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes"></a>

```typescript
public resetOauthScopes(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput">composerInternalIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput">composerNetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput">enableIpMasqAgentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput">ipAllocationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput">oauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock">composerInternalIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment">composerNetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">enableIpMasqAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAllocationPolicy`<sup>Required</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a>

---

##### `composerInternalIpv4CidrBlockInput`<sup>Optional</sup> <a name="composerInternalIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput"></a>

```typescript
public readonly composerInternalIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `composerNetworkAttachmentInput`<sup>Optional</sup> <a name="composerNetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput"></a>

```typescript
public readonly composerNetworkAttachmentInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `enableIpMasqAgentInput`<sup>Optional</sup> <a name="enableIpMasqAgentInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput"></a>

```typescript
public readonly enableIpMasqAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAllocationPolicyInput`<sup>Optional</sup> <a name="ipAllocationPolicyInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput"></a>

```typescript
public readonly ipAllocationPolicyInput: GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">GoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `oauthScopesInput`<sup>Optional</sup> <a name="oauthScopesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput"></a>

```typescript
public readonly oauthScopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `composerInternalIpv4CidrBlock`<sup>Required</sup> <a name="composerInternalIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock"></a>

```typescript
public readonly composerInternalIpv4CidrBlock: string;
```

- *Type:* string

---

##### `composerNetworkAttachment`<sup>Required</sup> <a name="composerNetworkAttachment" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment"></a>

```typescript
public readonly composerNetworkAttachment: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `enableIpMasqAgent`<sup>Required</sup> <a name="enableIpMasqAgent" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```typescript
public readonly enableIpMasqAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigNodeConfig">GoogleComposerEnvironmentConfigNodeConfig</a>

---


### GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork">resetCloudComposerConnectionSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock">resetCloudComposerNetworkIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock">resetCloudSqlIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint">resetEnablePrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps">resetEnablePrivatelyUsedPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock">resetMasterIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock">resetWebServerIpv4CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudComposerConnectionSubnetwork` <a name="resetCloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork"></a>

```typescript
public resetCloudComposerConnectionSubnetwork(): void
```

##### `resetCloudComposerNetworkIpv4CidrBlock` <a name="resetCloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock"></a>

```typescript
public resetCloudComposerNetworkIpv4CidrBlock(): void
```

##### `resetCloudSqlIpv4CidrBlock` <a name="resetCloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock"></a>

```typescript
public resetCloudSqlIpv4CidrBlock(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetEnablePrivateEndpoint` <a name="resetEnablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint"></a>

```typescript
public resetEnablePrivateEndpoint(): void
```

##### `resetEnablePrivatelyUsedPublicIps` <a name="resetEnablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps"></a>

```typescript
public resetEnablePrivatelyUsedPublicIps(): void
```

##### `resetMasterIpv4CidrBlock` <a name="resetMasterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock"></a>

```typescript
public resetMasterIpv4CidrBlock(): void
```

##### `resetWebServerIpv4CidrBlock` <a name="resetWebServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock"></a>

```typescript
public resetWebServerIpv4CidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput">cloudComposerConnectionSubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput">cloudComposerNetworkIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput">cloudSqlIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput">enablePrivateEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput">enablePrivatelyUsedPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput">masterIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput">webServerIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">cloudComposerConnectionSubnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">cloudComposerNetworkIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">cloudSqlIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">enablePrivateEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">enablePrivatelyUsedPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">masterIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">webServerIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudComposerConnectionSubnetworkInput`<sup>Optional</sup> <a name="cloudComposerConnectionSubnetworkInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput"></a>

```typescript
public readonly cloudComposerConnectionSubnetworkInput: string;
```

- *Type:* string

---

##### `cloudComposerNetworkIpv4CidrBlockInput`<sup>Optional</sup> <a name="cloudComposerNetworkIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput"></a>

```typescript
public readonly cloudComposerNetworkIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `cloudSqlIpv4CidrBlockInput`<sup>Optional</sup> <a name="cloudSqlIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput"></a>

```typescript
public readonly cloudSqlIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `enablePrivateEndpointInput`<sup>Optional</sup> <a name="enablePrivateEndpointInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput"></a>

```typescript
public readonly enablePrivateEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivatelyUsedPublicIpsInput`<sup>Optional</sup> <a name="enablePrivatelyUsedPublicIpsInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput"></a>

```typescript
public readonly enablePrivatelyUsedPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterIpv4CidrBlockInput`<sup>Optional</sup> <a name="masterIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput"></a>

```typescript
public readonly masterIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `webServerIpv4CidrBlockInput`<sup>Optional</sup> <a name="webServerIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput"></a>

```typescript
public readonly webServerIpv4CidrBlockInput: string;
```

- *Type:* string

---

##### `cloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="cloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```typescript
public readonly cloudComposerConnectionSubnetwork: string;
```

- *Type:* string

---

##### `cloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="cloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```typescript
public readonly cloudComposerNetworkIpv4CidrBlock: string;
```

- *Type:* string

---

##### `cloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="cloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```typescript
public readonly cloudSqlIpv4CidrBlock: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `enablePrivateEndpoint`<sup>Required</sup> <a name="enablePrivateEndpoint" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```typescript
public readonly enablePrivateEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="enablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```typescript
public readonly enablePrivatelyUsedPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterIpv4CidrBlock`<sup>Required</sup> <a name="masterIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```typescript
public readonly masterIpv4CidrBlock: string;
```

- *Type:* string

---

##### `webServerIpv4CidrBlock`<sup>Required</sup> <a name="webServerIpv4CidrBlock" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```typescript
public readonly webServerIpv4CidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigPrivateEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigPrivateEnvironmentConfig">GoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### GoogleComposerEnvironmentConfigRecoveryConfigOutputReference <a name="GoogleComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig">putScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig">resetScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduledSnapshotsConfig` <a name="putScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig"></a>

```typescript
public putScheduledSnapshotsConfig(value: GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `resetScheduledSnapshotsConfig` <a name="resetScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig"></a>

```typescript
public resetScheduledSnapshotsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">scheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput">scheduledSnapshotsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduledSnapshotsConfig`<sup>Required</sup> <a name="scheduledSnapshotsConfig" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```typescript
public readonly scheduledSnapshotsConfig: GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a>

---

##### `scheduledSnapshotsConfigInput`<sup>Optional</sup> <a name="scheduledSnapshotsConfigInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput"></a>

```typescript
public readonly scheduledSnapshotsConfigInput: GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigRecoveryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfig">GoogleComposerEnvironmentConfigRecoveryConfig</a>

---


### GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule">resetSnapshotCreationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation">resetSnapshotLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnapshotCreationSchedule` <a name="resetSnapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule"></a>

```typescript
public resetSnapshotCreationSchedule(): void
```

##### `resetSnapshotLocation` <a name="resetSnapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation"></a>

```typescript
public resetSnapshotLocation(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput">snapshotCreationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput">snapshotLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">snapshotCreationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">snapshotLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotCreationScheduleInput`<sup>Optional</sup> <a name="snapshotCreationScheduleInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput"></a>

```typescript
public readonly snapshotCreationScheduleInput: string;
```

- *Type:* string

---

##### `snapshotLocationInput`<sup>Optional</sup> <a name="snapshotLocationInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput"></a>

```typescript
public readonly snapshotLocationInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotCreationSchedule`<sup>Required</sup> <a name="snapshotCreationSchedule" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```typescript
public readonly snapshotCreationSchedule: string;
```

- *Type:* string

---

##### `snapshotLocation`<sup>Required</sup> <a name="snapshotLocation" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```typescript
public readonly snapshotLocation: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">GoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference <a name="GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---


### GoogleComposerEnvironmentConfigSoftwareConfigOutputReference <a name="GoogleComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration">putCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides">resetAirflowConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration">resetCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages">resetPypiPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount">resetSchedulerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode">resetWebServerPluginsMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudDataLineageIntegration` <a name="putCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration"></a>

```typescript
public putCloudDataLineageIntegration(value: GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `resetAirflowConfigOverrides` <a name="resetAirflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides"></a>

```typescript
public resetAirflowConfigOverrides(): void
```

##### `resetCloudDataLineageIntegration` <a name="resetCloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration"></a>

```typescript
public resetCloudDataLineageIntegration(): void
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables"></a>

```typescript
public resetEnvVariables(): void
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```typescript
public resetImageVersion(): void
```

##### `resetPypiPackages` <a name="resetPypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages"></a>

```typescript
public resetPypiPackages(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetSchedulerCount` <a name="resetSchedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount"></a>

```typescript
public resetSchedulerCount(): void
```

##### `resetWebServerPluginsMode` <a name="resetWebServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode"></a>

```typescript
public resetWebServerPluginsMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration">cloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput">airflowConfigOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput">cloudDataLineageIntegrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput">envVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput">imageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput">pypiPackagesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput">schedulerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput">webServerPluginsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">airflowConfigOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">pypiPackages</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">schedulerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode">webServerPluginsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudDataLineageIntegration`<sup>Required</sup> <a name="cloudDataLineageIntegration" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration"></a>

```typescript
public readonly cloudDataLineageIntegration: GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a>

---

##### `airflowConfigOverridesInput`<sup>Optional</sup> <a name="airflowConfigOverridesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput"></a>

```typescript
public readonly airflowConfigOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cloudDataLineageIntegrationInput`<sup>Optional</sup> <a name="cloudDataLineageIntegrationInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput"></a>

```typescript
public readonly cloudDataLineageIntegrationInput: GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">GoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput"></a>

```typescript
public readonly envVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```typescript
public readonly imageVersionInput: string;
```

- *Type:* string

---

##### `pypiPackagesInput`<sup>Optional</sup> <a name="pypiPackagesInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput"></a>

```typescript
public readonly pypiPackagesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `schedulerCountInput`<sup>Optional</sup> <a name="schedulerCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput"></a>

```typescript
public readonly schedulerCountInput: number;
```

- *Type:* number

---

##### `webServerPluginsModeInput`<sup>Optional</sup> <a name="webServerPluginsModeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput"></a>

```typescript
public readonly webServerPluginsModeInput: string;
```

- *Type:* string

---

##### `airflowConfigOverrides`<sup>Required</sup> <a name="airflowConfigOverrides" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```typescript
public readonly airflowConfigOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `pypiPackages`<sup>Required</sup> <a name="pypiPackages" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```typescript
public readonly pypiPackages: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `schedulerCount`<sup>Required</sup> <a name="schedulerCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```typescript
public readonly schedulerCount: number;
```

- *Type:* number

---

##### `webServerPluginsMode`<sup>Required</sup> <a name="webServerPluginsMode" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode"></a>

```typescript
public readonly webServerPluginsMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigSoftwareConfig">GoogleComposerEnvironmentConfigSoftwareConfig</a>

---


### GoogleComposerEnvironmentConfigWebServerConfigOutputReference <a name="GoogleComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWebServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerConfig">GoogleComposerEnvironmentConfigWebServerConfig</a>

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```typescript
public get(index: number): GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>

---


### GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange">putAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange">resetAllowedIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedIpRange` <a name="putAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange"></a>

```typescript
public putAllowedIpRange(value: IResolvable | GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

---

##### `resetAllowedIpRange` <a name="resetAllowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange"></a>

```typescript
public resetAllowedIpRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">allowedIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput">allowedIpRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpRange`<sup>Required</sup> <a name="allowedIpRange" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `allowedIpRangeInput`<sup>Optional</sup> <a name="allowedIpRangeInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput"></a>

```typescript
public readonly allowedIpRangeInput: IResolvable | GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">GoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWebServerNetworkAccessControl;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWebServerNetworkAccessControl">GoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor">putDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler">putScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer">putTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer">putWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker">putWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor">resetDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler">resetScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer">resetTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer">resetWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker">resetWorker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDagProcessor` <a name="putDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor"></a>

```typescript
public putDagProcessor(value: GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `putScheduler` <a name="putScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler"></a>

```typescript
public putScheduler(value: GoogleComposerEnvironmentConfigWorkloadsConfigScheduler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `putTriggerer` <a name="putTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer"></a>

```typescript
public putTriggerer(value: GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `putWebServer` <a name="putWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer"></a>

```typescript
public putWebServer(value: GoogleComposerEnvironmentConfigWorkloadsConfigWebServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `putWorker` <a name="putWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker"></a>

```typescript
public putWorker(value: GoogleComposerEnvironmentConfigWorkloadsConfigWorker): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `resetDagProcessor` <a name="resetDagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor"></a>

```typescript
public resetDagProcessor(): void
```

##### `resetScheduler` <a name="resetScheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler"></a>

```typescript
public resetScheduler(): void
```

##### `resetTriggerer` <a name="resetTriggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer"></a>

```typescript
public resetTriggerer(): void
```

##### `resetWebServer` <a name="resetWebServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer"></a>

```typescript
public resetWebServer(): void
```

##### `resetWorker` <a name="resetWorker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker"></a>

```typescript
public resetWorker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor">dagProcessor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">webServer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput">dagProcessorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput">schedulerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput">triggererInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput">webServerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput">workerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dagProcessor`<sup>Required</sup> <a name="dagProcessor" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor"></a>

```typescript
public readonly dagProcessor: GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a>

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```typescript
public readonly scheduler: GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a>

---

##### `triggerer`<sup>Required</sup> <a name="triggerer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```typescript
public readonly triggerer: GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a>

---

##### `webServer`<sup>Required</sup> <a name="webServer" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```typescript
public readonly webServer: GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a>

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```typescript
public readonly worker: GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a>

---

##### `dagProcessorInput`<sup>Optional</sup> <a name="dagProcessorInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput"></a>

```typescript
public readonly dagProcessorInput: GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor">GoogleComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `schedulerInput`<sup>Optional</sup> <a name="schedulerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput"></a>

```typescript
public readonly schedulerInput: GoogleComposerEnvironmentConfigWorkloadsConfigScheduler;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `triggererInput`<sup>Optional</sup> <a name="triggererInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput"></a>

```typescript
public readonly triggererInput: GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `webServerInput`<sup>Optional</sup> <a name="webServerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput"></a>

```typescript
public readonly webServerInput: GoogleComposerEnvironmentConfigWorkloadsConfigWebServer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `workerInput`<sup>Optional</sup> <a name="workerInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput"></a>

```typescript
public readonly workerInput: GoogleComposerEnvironmentConfigWorkloadsConfigWorker;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWorkloadsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfig">GoogleComposerEnvironmentConfigWorkloadsConfig</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWorkloadsConfigScheduler;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigScheduler">GoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">GoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWorkloadsConfigWebServer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWebServer">GoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb">resetStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount"></a>

```typescript
public resetMaxCount(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount"></a>

```typescript
public resetMinCount(): void
```

##### `resetStorageGb` <a name="resetStorageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb"></a>

```typescript
public resetStorageGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput">minCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput">storageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">minCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput"></a>

```typescript
public readonly maxCountInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput"></a>

```typescript
public readonly minCountInput: number;
```

- *Type:* number

---

##### `storageGbInput`<sup>Optional</sup> <a name="storageGbInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput"></a>

```typescript
public readonly storageGbInput: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentConfigWorkloadsConfigWorker;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentConfigWorkloadsConfigWorker">GoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### GoogleComposerEnvironmentStorageConfigOutputReference <a name="GoogleComposerEnvironmentStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComposerEnvironmentStorageConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentStorageConfig">GoogleComposerEnvironmentStorageConfig</a>

---


### GoogleComposerEnvironmentTimeoutsOutputReference <a name="GoogleComposerEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComposerEnvironment } from '@cdktf/provider-google-beta'

new googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerEnvironment.GoogleComposerEnvironmentTimeouts">GoogleComposerEnvironmentTimeouts</a>

---



