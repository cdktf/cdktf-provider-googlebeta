# `googleAppEngineDomainMapping` Submodule <a name="`googleAppEngineDomainMapping` Submodule" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineDomainMapping <a name="GoogleAppEngineDomainMapping" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

new googleAppEngineDomainMapping.GoogleAppEngineDomainMapping(scope: Construct, id: string, config: GoogleAppEngineDomainMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig">GoogleAppEngineDomainMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig">GoogleAppEngineDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings">putSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideStrategy">resetOverrideStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetSslSettings">resetSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSslSettings` <a name="putSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings"></a>

```typescript
public putSslSettings(value: GoogleAppEngineDomainMappingSslSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAppEngineDomainMappingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOverrideStrategy` <a name="resetOverrideStrategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideStrategy"></a>

```typescript
public resetOverrideStrategy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSslSettings` <a name="resetSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetSslSettings"></a>

```typescript
public resetSslSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineDomainMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.resourceRecords">resourceRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList">GoogleAppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettings">sslSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference">GoogleAppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference">GoogleAppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategyInput">overrideStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettingsInput">sslSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategy">overrideStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: GoogleAppEngineDomainMappingResourceRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList">GoogleAppEngineDomainMappingResourceRecordsList</a>

---

##### `sslSettings`<sup>Required</sup> <a name="sslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettings"></a>

```typescript
public readonly sslSettings: GoogleAppEngineDomainMappingSslSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference">GoogleAppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineDomainMappingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference">GoogleAppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `overrideStrategyInput`<sup>Optional</sup> <a name="overrideStrategyInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategyInput"></a>

```typescript
public readonly overrideStrategyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sslSettingsInput`<sup>Optional</sup> <a name="sslSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettingsInput"></a>

```typescript
public readonly sslSettingsInput: GoogleAppEngineDomainMappingSslSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAppEngineDomainMappingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `overrideStrategy`<sup>Required</sup> <a name="overrideStrategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategy"></a>

```typescript
public readonly overrideStrategy: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineDomainMappingConfig <a name="GoogleAppEngineDomainMappingConfig" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

const googleAppEngineDomainMappingConfig: googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.domainName">domainName</a></code> | <code>string</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.overrideStrategy">overrideStrategy</a></code> | <code>string</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.sslSettings">sslSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#domain_name GoogleAppEngineDomainMapping#domain_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideStrategy`<sup>Optional</sup> <a name="overrideStrategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.overrideStrategy"></a>

```typescript
public readonly overrideStrategy: string;
```

- *Type:* string

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#override_strategy GoogleAppEngineDomainMapping#override_strategy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}.

---

##### `sslSettings`<sup>Optional</sup> <a name="sslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.sslSettings"></a>

```typescript
public readonly sslSettings: GoogleAppEngineDomainMappingSslSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#ssl_settings GoogleAppEngineDomainMapping#ssl_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineDomainMappingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#timeouts GoogleAppEngineDomainMapping#timeouts}

---

### GoogleAppEngineDomainMappingResourceRecords <a name="GoogleAppEngineDomainMappingResourceRecords" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

const googleAppEngineDomainMappingResourceRecords: googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords = { ... }
```


### GoogleAppEngineDomainMappingSslSettings <a name="GoogleAppEngineDomainMappingSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

const googleAppEngineDomainMappingSslSettings: googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.sslManagementType">sslManagementType</a></code> | <code>string</code> | SSL management type for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.certificateId">certificateId</a></code> | <code>string</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `sslManagementType`<sup>Required</sup> <a name="sslManagementType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```typescript
public readonly sslManagementType: string;
```

- *Type:* string

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#ssl_management_type GoogleAppEngineDomainMapping#ssl_management_type}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#certificate_id GoogleAppEngineDomainMapping#certificate_id}

---

### GoogleAppEngineDomainMappingTimeouts <a name="GoogleAppEngineDomainMappingTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

const googleAppEngineDomainMappingTimeouts: googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineDomainMappingResourceRecordsList <a name="GoogleAppEngineDomainMappingResourceRecordsList" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

new googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get"></a>

```typescript
public get(index: number): GoogleAppEngineDomainMappingResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleAppEngineDomainMappingResourceRecordsOutputReference <a name="GoogleAppEngineDomainMappingResourceRecordsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

new googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">rrdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords">GoogleAppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rrdata`<sup>Required</sup> <a name="rrdata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```typescript
public readonly rrdata: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineDomainMappingResourceRecords;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords">GoogleAppEngineDomainMappingResourceRecords</a>

---


### GoogleAppEngineDomainMappingSslSettingsOutputReference <a name="GoogleAppEngineDomainMappingSslSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

new googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">pendingManagedCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">sslManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">sslManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pendingManagedCertificateId`<sup>Required</sup> <a name="pendingManagedCertificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```typescript
public readonly pendingManagedCertificateId: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `sslManagementTypeInput`<sup>Optional</sup> <a name="sslManagementTypeInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```typescript
public readonly sslManagementTypeInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `sslManagementType`<sup>Required</sup> <a name="sslManagementType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```typescript
public readonly sslManagementType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineDomainMappingSslSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---


### GoogleAppEngineDomainMappingTimeoutsOutputReference <a name="GoogleAppEngineDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineDomainMapping } from '@cdktf/provider-google-beta'

new googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineDomainMappingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

---



