# `googleKmsCryptoKeyVersion` Submodule <a name="`googleKmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKeyVersion <a name="GoogleKmsCryptoKeyVersion" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion(scope: Construct, id: string, config: GoogleKmsCryptoKeyVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig">GoogleKmsCryptoKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig">GoogleKmsCryptoKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions">putExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetExternalProtectionLevelOptions">resetExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalProtectionLevelOptions` <a name="putExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions"></a>

```typescript
public putExternalProtectionLevelOptions(value: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleKmsCryptoKeyVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

---

##### `resetExternalProtectionLevelOptions` <a name="resetExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetExternalProtectionLevelOptions"></a>

```typescript
public resetExternalProtectionLevelOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsCryptoKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList">GoogleKmsCryptoKeyVersionAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.generateTime">generateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference">GoogleKmsCryptoKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput">externalProtectionLevelOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.attestation"></a>

```typescript
public readonly attestation: GoogleKmsCryptoKeyVersionAttestationList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList">GoogleKmsCryptoKeyVersionAttestationList</a>

---

##### `externalProtectionLevelOptions`<sup>Required</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptions"></a>

```typescript
public readonly externalProtectionLevelOptions: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a>

---

##### `generateTime`<sup>Required</sup> <a name="generateTime" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.generateTime"></a>

```typescript
public readonly generateTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsCryptoKeyVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference">GoogleKmsCryptoKeyVersionTimeoutsOutputReference</a>

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```typescript
public readonly cryptoKeyInput: string;
```

- *Type:* string

---

##### `externalProtectionLevelOptionsInput`<sup>Optional</sup> <a name="externalProtectionLevelOptionsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput"></a>

```typescript
public readonly externalProtectionLevelOptionsInput: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleKmsCryptoKeyVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyVersionAttestation <a name="GoogleKmsCryptoKeyVersionAttestation" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

const googleKmsCryptoKeyVersionAttestation: googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation = { ... }
```


### GoogleKmsCryptoKeyVersionAttestationCertChains <a name="GoogleKmsCryptoKeyVersionAttestationCertChains" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

const googleKmsCryptoKeyVersionAttestationCertChains: googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains = { ... }
```


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

const googleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions: googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions = { ... }
```


### GoogleKmsCryptoKeyVersionConfig <a name="GoogleKmsCryptoKeyVersionConfig" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

const googleKmsCryptoKeyVersionConfig: googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.state">state</a></code> | <code>string</code> | The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#crypto_key GoogleKmsCryptoKeyVersion#crypto_key}

---

##### `externalProtectionLevelOptions`<sup>Optional</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions"></a>

```typescript
public readonly externalProtectionLevelOptions: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#external_protection_level_options GoogleKmsCryptoKeyVersion#external_protection_level_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#state GoogleKmsCryptoKeyVersion#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsCryptoKeyVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#timeouts GoogleKmsCryptoKeyVersion#timeouts}

---

### GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions <a name="GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

const googleKmsCryptoKeyVersionExternalProtectionLevelOptions: googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>string</code> | The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri">externalKeyUri</a></code> | <code>string</code> | The URI for an external resource that this CryptoKeyVersion represents. |

---

##### `ekmConnectionKeyPath`<sup>Optional</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath"></a>

```typescript
public readonly ekmConnectionKeyPath: string;
```

- *Type:* string

The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#ekm_connection_key_path GoogleKmsCryptoKeyVersion#ekm_connection_key_path}

---

##### `externalKeyUri`<sup>Optional</sup> <a name="externalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri"></a>

```typescript
public readonly externalKeyUri: string;
```

- *Type:* string

The URI for an external resource that this CryptoKeyVersion represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#external_key_uri GoogleKmsCryptoKeyVersion#external_key_uri}

---

### GoogleKmsCryptoKeyVersionTimeouts <a name="GoogleKmsCryptoKeyVersionTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

const googleKmsCryptoKeyVersionTimeouts: googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyVersionAttestationCertChainsList <a name="GoogleKmsCryptoKeyVersionAttestationCertChainsList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get"></a>

```typescript
public get(index: number): GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts">caviumCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts">googleCardCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts">googlePartitionCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains">GoogleKmsCryptoKeyVersionAttestationCertChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caviumCerts`<sup>Required</sup> <a name="caviumCerts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts"></a>

```typescript
public readonly caviumCerts: string[];
```

- *Type:* string[]

---

##### `googleCardCerts`<sup>Required</sup> <a name="googleCardCerts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts"></a>

```typescript
public readonly googleCardCerts: string[];
```

- *Type:* string[]

---

##### `googlePartitionCerts`<sup>Required</sup> <a name="googlePartitionCerts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts"></a>

```typescript
public readonly googlePartitionCerts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyVersionAttestationCertChains;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains">GoogleKmsCryptoKeyVersionAttestationCertChains</a>

---


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get"></a>

```typescript
public get(index: number): GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">externalKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ekmConnectionKeyPath`<sup>Required</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```typescript
public readonly ekmConnectionKeyPath: string;
```

- *Type:* string

---

##### `externalKeyUri`<sup>Required</sup> <a name="externalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```typescript
public readonly externalKeyUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a>

---


### GoogleKmsCryptoKeyVersionAttestationList <a name="GoogleKmsCryptoKeyVersionAttestationList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get"></a>

```typescript
public get(index: number): GoogleKmsCryptoKeyVersionAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleKmsCryptoKeyVersionAttestationOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.certChains">certChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList">GoogleKmsCryptoKeyVersionAttestationCertChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation">GoogleKmsCryptoKeyVersionAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certChains`<sup>Required</sup> <a name="certChains" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.certChains"></a>

```typescript
public readonly certChains: GoogleKmsCryptoKeyVersionAttestationCertChainsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList">GoogleKmsCryptoKeyVersionAttestationCertChainsList</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `externalProtectionLevelOptions`<sup>Required</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions"></a>

```typescript
public readonly externalProtectionLevelOptions: GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyVersionAttestation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation">GoogleKmsCryptoKeyVersionAttestation</a>

---


### GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference <a name="GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath">resetEkmConnectionKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri">resetExternalKeyUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEkmConnectionKeyPath` <a name="resetEkmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath"></a>

```typescript
public resetEkmConnectionKeyPath(): void
```

##### `resetExternalKeyUri` <a name="resetExternalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri"></a>

```typescript
public resetExternalKeyUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput">ekmConnectionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput">externalKeyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">externalKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ekmConnectionKeyPathInput`<sup>Optional</sup> <a name="ekmConnectionKeyPathInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput"></a>

```typescript
public readonly ekmConnectionKeyPathInput: string;
```

- *Type:* string

---

##### `externalKeyUriInput`<sup>Optional</sup> <a name="externalKeyUriInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput"></a>

```typescript
public readonly externalKeyUriInput: string;
```

- *Type:* string

---

##### `ekmConnectionKeyPath`<sup>Required</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```typescript
public readonly ekmConnectionKeyPath: string;
```

- *Type:* string

---

##### `externalKeyUri`<sup>Required</sup> <a name="externalKeyUri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```typescript
public readonly externalKeyUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---


### GoogleKmsCryptoKeyVersionTimeoutsOutputReference <a name="GoogleKmsCryptoKeyVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleKmsCryptoKeyVersion } from '@cdktf/provider-google-beta'

new googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleKmsCryptoKeyVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

---



