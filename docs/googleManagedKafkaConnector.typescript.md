# `googleManagedKafkaConnector` Submodule <a name="`googleManagedKafkaConnector` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaConnector <a name="GoogleManagedKafkaConnector" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector google_managed_kafka_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnector.GoogleManagedKafkaConnector(scope: Construct, id: string, config: GoogleManagedKafkaConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig">GoogleManagedKafkaConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig">GoogleManagedKafkaConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTaskRestartPolicy">putTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTaskRestartPolicy">resetTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTaskRestartPolicy` <a name="putTaskRestartPolicy" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTaskRestartPolicy"></a>

```typescript
public putTaskRestartPolicy(value: GoogleManagedKafkaConnectorTaskRestartPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTaskRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleManagedKafkaConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetConfigs"></a>

```typescript
public resetConfigs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTaskRestartPolicy` <a name="resetTaskRestartPolicy" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTaskRestartPolicy"></a>

```typescript
public resetTaskRestartPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleManagedKafkaConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleManagedKafkaConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleManagedKafkaConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference">GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference">GoogleManagedKafkaConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configsInput">configsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectClusterInput">connectClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicyInput">taskRestartPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configs">configs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectCluster">connectCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `taskRestartPolicy`<sup>Required</sup> <a name="taskRestartPolicy" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicy"></a>

```typescript
public readonly taskRestartPolicy: GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference">GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleManagedKafkaConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference">GoogleManagedKafkaConnectorTimeoutsOutputReference</a>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configsInput"></a>

```typescript
public readonly configsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectClusterInput`<sup>Optional</sup> <a name="connectClusterInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectClusterInput"></a>

```typescript
public readonly connectClusterInput: string;
```

- *Type:* string

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `taskRestartPolicyInput`<sup>Optional</sup> <a name="taskRestartPolicyInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.taskRestartPolicyInput"></a>

```typescript
public readonly taskRestartPolicyInput: GoogleManagedKafkaConnectorTaskRestartPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleManagedKafkaConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.configs"></a>

```typescript
public readonly configs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectCluster"></a>

```typescript
public readonly connectCluster: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaConnectorConfig <a name="GoogleManagedKafkaConnectorConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.Initializer"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectorConfig: googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectCluster">connectCluster</a></code> | <code>string</code> | The connect cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectorId">connectorId</a></code> | <code>string</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.configs">configs</a></code> | <code>{[ key: string ]: string}</code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#id GoogleManagedKafkaConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#project GoogleManagedKafkaConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectCluster"></a>

```typescript
public readonly connectCluster: string;
```

- *Type:* string

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#connect_cluster GoogleManagedKafkaConnector#connect_cluster}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#connector_id GoogleManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#location GoogleManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.configs"></a>

```typescript
public readonly configs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#configs GoogleManagedKafkaConnector#configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#id GoogleManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#project GoogleManagedKafkaConnector#project}.

---

##### `taskRestartPolicy`<sup>Optional</sup> <a name="taskRestartPolicy" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.taskRestartPolicy"></a>

```typescript
public readonly taskRestartPolicy: GoogleManagedKafkaConnectorTaskRestartPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#task_restart_policy GoogleManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleManagedKafkaConnectorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#timeouts GoogleManagedKafkaConnector#timeouts}

---

### GoogleManagedKafkaConnectorTaskRestartPolicy <a name="GoogleManagedKafkaConnectorTaskRestartPolicy" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.Initializer"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectorTaskRestartPolicy: googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | The maximum amount of time to wait before retrying a failed task. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | The minimum amount of time to wait before retrying a failed task. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#maximum_backoff GoogleManagedKafkaConnector#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#minimum_backoff GoogleManagedKafkaConnector#minimum_backoff}

---

### GoogleManagedKafkaConnectorTimeouts <a name="GoogleManagedKafkaConnectorTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.Initializer"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectorTimeouts: googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#create GoogleManagedKafkaConnector#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#delete GoogleManagedKafkaConnector#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#update GoogleManagedKafkaConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#create GoogleManagedKafkaConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#delete GoogleManagedKafkaConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_managed_kafka_connector#update GoogleManagedKafkaConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference <a name="GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff"></a>

```typescript
public resetMaximumBackoff(): void
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff"></a>

```typescript
public resetMinimumBackoff(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput"></a>

```typescript
public readonly maximumBackoffInput: string;
```

- *Type:* string

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput"></a>

```typescript
public readonly minimumBackoffInput: string;
```

- *Type:* string

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleManagedKafkaConnectorTaskRestartPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTaskRestartPolicy">GoogleManagedKafkaConnectorTaskRestartPolicy</a>

---


### GoogleManagedKafkaConnectorTimeoutsOutputReference <a name="GoogleManagedKafkaConnectorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnector } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleManagedKafkaConnectorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnector.GoogleManagedKafkaConnectorTimeouts">GoogleManagedKafkaConnectorTimeouts</a>

---



