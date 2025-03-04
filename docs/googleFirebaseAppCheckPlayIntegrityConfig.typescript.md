# `googleFirebaseAppCheckPlayIntegrityConfig` Submodule <a name="`googleFirebaseAppCheckPlayIntegrityConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckPlayIntegrityConfig <a name="GoogleFirebaseAppCheckPlayIntegrityConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config google_firebase_app_check_play_integrity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

new googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig(scope: Construct, id: string, config: GoogleFirebaseAppCheckPlayIntegrityConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig">GoogleFirebaseAppCheckPlayIntegrityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig">GoogleFirebaseAppCheckPlayIntegrityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckPlayIntegrityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckPlayIntegrityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppCheckPlayIntegrityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppCheckPlayIntegrityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckPlayIntegrityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckPlayIntegrityConfigConfig <a name="GoogleFirebaseAppCheckPlayIntegrityConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.Initializer"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

const googleFirebaseAppCheckPlayIntegrityConfigConfig: googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.appId">appId</a></code> | <code>string</code> | The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#id GoogleFirebaseAppCheckPlayIntegrityConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#project GoogleFirebaseAppCheckPlayIntegrityConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#app_id GoogleFirebaseAppCheckPlayIntegrityConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#id GoogleFirebaseAppCheckPlayIntegrityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#project GoogleFirebaseAppCheckPlayIntegrityConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#timeouts GoogleFirebaseAppCheckPlayIntegrityConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#token_ttl GoogleFirebaseAppCheckPlayIntegrityConfig#token_ttl}

---

### GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts <a name="GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

const googleFirebaseAppCheckPlayIntegrityConfigTimeouts: googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#create GoogleFirebaseAppCheckPlayIntegrityConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#delete GoogleFirebaseAppCheckPlayIntegrityConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#update GoogleFirebaseAppCheckPlayIntegrityConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#create GoogleFirebaseAppCheckPlayIntegrityConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#delete GoogleFirebaseAppCheckPlayIntegrityConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_firebase_app_check_play_integrity_config#update GoogleFirebaseAppCheckPlayIntegrityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google-beta'

new googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckPlayIntegrityConfig.GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts">GoogleFirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---



